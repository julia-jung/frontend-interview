import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

interface handlerConfig {
  method?: 'get' | 'post' | 'put' | 'delete';
  path: string;
  resolver: Function;
}

export function createServer(handlerConfig: handlerConfig[]) {
  const handler = handlerConfig.map((config) => {
    const method = config.method || 'get';
    return http[method](
      config.path,
      ({ request, requestId, params, cookies }) => {
        return HttpResponse.json(
          config.resolver({ request, requestId, params, cookies })
        );
      }
    );
  });

  const server = setupServer(...handler);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
