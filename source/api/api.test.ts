import { API, ActivityType } from "./index";

describe('API tests', () => {
  test('Fetch activity test', async (done) => {
    try {
      const a = await API.fetchActivity('type');
      done()
    } catch (e) {
      done(e);
    }
  });
});