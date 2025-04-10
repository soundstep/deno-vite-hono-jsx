import { type Route, route } from '@std/http/unstable-route';
import { serveDir } from '@std/http/file-server';
import app from './app.tsx';

const routes: Route[] = [
    {
        pattern: new URLPattern({ pathname: '/static/*' }),
        handler: (req: Request) =>
            serveDir(req, {
                fsRoot: './dist',
            }),
    },
];

Deno.env.set('PROD', 'true');

Deno.serve(route(routes, app.fetch));
