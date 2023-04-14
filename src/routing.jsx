import {createHashRouter, RouterProvider} from "react-router-dom";

const pages = import.meta.glob("./pages/**/*.jsx", {eager: true});

const routes = [];
for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
    if (!fileName) {
        continue;
    }

    const normalizedPathName = fileName.includes("$")
        ? fileName.replace("$", ":")
        : fileName.replace(/\/index/, "");

    routes.push({
        path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: pages[path].default,
        loader: pages[path]?.loader,
        action: pages[path]?.action,
        ErrorBoundary: pages[path]?.ErrorBoundary,
    });
}

const router = createHashRouter(
    routes.map(({Element, ErrorBoundary, ...rest}) => ({
        ...rest,
        element: <Element/>,
        ...(ErrorBoundary && {errorElement: <ErrorBoundary/>}),
    }))
);

export default function Routing() {
    return <RouterProvider router={router}/>;
}