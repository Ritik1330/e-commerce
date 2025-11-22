import type { Context } from "hono";

/**
 * User roles for authorization
 */
export enum UserRole {
	ADMIN = "admin",
	USER = "user",
	MODERATOR = "moderator",
}

/**
 * Role-based authorization middleware
 * Checks if user has required role(s)
 * 
 * @param allowedRoles - Array of roles that can access the route
 */
export function requireRole(...allowedRoles: UserRole[]) {
	return async (c: Context, next: () => Promise<void>) => {
		const user = c.get("user");

		if (!user) {
			return c.json({ error: "Unauthorized - No user found" }, 401);
		}

		// Get user role (default to USER if not specified)
		const userRole = (user.role as UserRole) || UserRole.USER;

		// Check if user has required role
		if (!allowedRoles.includes(userRole)) {
			return c.json(
				{
					error: "Forbidden - Insufficient permissions",
					required: allowedRoles,
					current: userRole,
				},
				403
			);
		}

		await next();
	};
}

/**
 * Admin-only middleware
 * Shorthand for requireRole(UserRole.ADMIN)
 */
export function requireAdmin(c: Context, next: () => Promise<void>) {
	return requireRole(UserRole.ADMIN)(c, next);
}

/**
 * Check if user is admin
 */
export function isAdmin(user: any): boolean {
	return user?.role === UserRole.ADMIN;
}

/**
 * Check if user owns a resource
 * 
 * @param user - Current user
 * @param resourceUserId - User ID of the resource owner
 */
export function isOwner(user: any, resourceUserId: string): boolean {
	return user?.id === resourceUserId;
}

/**
 * Check if user is admin or owns the resource
 */
export function canAccessResource(user: any, resourceUserId: string): boolean {
	return isAdmin(user) || isOwner(user, resourceUserId);
}
