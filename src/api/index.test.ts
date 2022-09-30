import { describe, expect, it, vi } from 'vitest';
import { ApiCallFunction, memoRequest } from '.';

type MockArg = {
  value: string;
};

describe('API Index file', () => {
  it('Should return a closured version of the same function', async () => {
    const sampleArgs = { value: "I'm a spy >:D" };
    const sample: ApiCallFunction<MockArg, MockArg> = async someArg => {
      return someArg as MockArg;
    };

    const sampleSpy = vi.fn(sample);
    const memoized = memoRequest(sampleSpy);
    await memoized(sampleArgs);
    await memoized(sampleArgs);

    expect(sampleSpy).toHaveBeenCalledTimes(1);
  });
});
