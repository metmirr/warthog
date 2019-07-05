import { Server, ServerOptions } from '../src/core';

// This spins up a mock Warthog server using the models and resolvers in the test/modules directory
export function getTestServer(options: ServerOptions<any>) {
  process.env.WARTHOG_APP_HOST = 'localhost';
  process.env.WARTHOG_APP_PORT = '4000';
  process.env.WARTHOG_APP_PROTOCOL = 'http';
  process.env.WARTHOG_AUTO_GENERATE_FILES = 'true';
  process.env.WARTHOG_AUTO_OPEN_PLAYGROUND = 'true';
  process.env.WARTHOG_DB_DATABASE = 'warthog-test';
  process.env.WARTHOG_DB_ENTITIES = 'test/modules/user/**/*.model.ts';
  process.env.WARTHOG_DB_HOST = 'localhost';
  process.env.WARTHOG_DB_LOGGING = 'none';
  process.env.WARTHOG_DB_USERNAME = 'foo';
  process.env.WARTHOG_DB_PASSWORD = '';
  process.env.WARTHOG_DB_SYNCHRONIZE = 'true';
  process.env.WARTHOG_GENERATED_FOLDER = './test/generated';
  process.env.WARTHOG_RESOLVERS_PATH = './test/modules/user/**/*.resolver.ts';
  process.env.WARTHOG_MODULE_IMPORT_PATH = '../../src';

  return new Server({
    introspection: true,
    mockDBConnection: true,
    openPlayground: false,
    ...options
  });
}