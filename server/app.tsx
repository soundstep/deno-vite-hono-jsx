import { Hono } from 'hono';

const app = new Hono();

export const routes = app.get('/api/clock', (c) => {
    return c.json({
        time: new Date().toLocaleTimeString(),
    });
});

const getEnv = (key: string) => {
    // get env between Vite (dev server) and Deno (prod server)
    if (typeof Deno === 'object') {
        return Deno.env.get(key);
    } else {
        return import.meta.env.PROD;
    }
};

app.get('/', (c) => {
    return c.html(
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta content='width=device-width, initial-scale=1' name='viewport' />
                <link
                    rel='stylesheet'
                    href='https://cdn.simplecss.org/simple.min.css'
                />
                {getEnv('PROD') ? <script type='module' src='/static/client.js' /> : <script type='module' src='/client/index.tsx' />}
            </head>
            <body>
                <div id='root' />
            </body>
        </html>,
    );
});

export default app;
export type AppType = typeof routes;
