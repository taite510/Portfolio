import { Config } from "./config";
import { Stats } from './types'

/**
 * This HTML file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const html = ({
  stats,
  content,
  config,
  css = ''
}: {
  stats: Stats
  content: string
  config: Config
  css?: string
}): string => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="theme-color" content="${config.app.THEME_COLOR}" />
      <title>${config.app.TITLE}</title>
      <link rel="manifest" href="${config.app.PUBLIC_URL}/manifest.json" />
      <link rel="shortcut icon" href="${config.app.PUBLIC_URL}/favicon.ico" />
      ${stats.styles.map(filename => `<link rel="stylesheet" href="${config.app.DIST_URL}/${filename}" />`).join('\n')}
      <style id="jss-server-side">${css}</style>
      <script id="config-server-side">
        window.__CONFIG__ = ${JSON.stringify(config)};
      </script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <body>
      <div id="root">${content}</div>
      <!-- removed 'crossorigin' from script tag below to sidestep CORS error (unsure if important) -->
      ${stats.scripts.map(filename => `<script src="${config.app.DIST_URL}/${filename}" ></script>`).join('\n')}
    </body>
  </html>`

export default html
