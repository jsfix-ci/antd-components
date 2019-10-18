import { matchPath } from 'react-router';

export const getActiveRoutes = (routes, location) => {
    let activeRoutes = [];

    routes.forEach(route => {
        const match = matchPath(location.pathname, {
            path: route.path,
            exact: route.exact || false,
            strict: route.strict || false
        });

        if (match) {
            activeRoutes.push(route.key);
        }

        const subitem = route.submenu || route.group;

        if (subitem) {
            activeRoutes = [
                ...activeRoutes,
                ...getActiveRoutes(subitem, location)
            ];
        }
    });

    return activeRoutes;
};

export const getAllSubmenuRoutes = (routes) => {
    let activeRoutes = [];

    routes.forEach(route => {
        const subitem = route.submenu || route.group;

        if (subitem) {
            if (route.submenu) {
                activeRoutes.push(route.key);
            }

            activeRoutes = [
                ...activeRoutes,
                ...getAllSubmenuRoutes(subitem)
            ];
        }
    });

    return activeRoutes;
};
