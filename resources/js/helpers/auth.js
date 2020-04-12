import { isEmpty } from "lodash";

export function getCurrentUser() {
    const currentUser = localStorage.getItem("user");
    
    if (!currentUser) {
        return null;
    }

    return currentUser;
}

export function getLocalPermissions() {
    const permissions = localStorage.getItem("permissions");

    if (!permissions) {
        return null;
    }

    return permissions;
}

export function getLocalRoles() {
    const roles = localStorage.getItem("roles");
    
    if (!roles) {
        return null;
    }

    return roles;
}

export function setHTTPToken() {

    if (isEmpty(token)) {
        window.axios.defaults.headers.common["Authorization"] = null;
    }

    window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}