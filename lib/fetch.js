import fetch from 'isomorphic-unfetch';
import AbortController from 'abort-controller';

function isCalledFromServer(context) {
    if (!context || !context.req) return false;
    return !!context.req;
}

export default async function fetchWrapper(context, url, options = {}) {
    const REQUEST_TIMEOUT = 10000;
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, REQUEST_TIMEOUT);

    options.signal = controller.signal;
    options.method = options.method || 'GET';

    const isServer = isCalledFromServer(context);
    const port = process?.env?.PORT || 3000;

    const fullUrl = isServer ? `http://localhost:${port}${url}` : url;

    let response = {};

    try {
        response = await fetch(fullUrl, options);
    } catch (e) {
        console.warn(e);
        response = e;
    } finally {
        clearTimeout(timeout);
    }

    return response;
}
