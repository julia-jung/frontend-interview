/** ⭐⭐
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * count(): returns the count of un-expired keys.
 */

class TimeLimitedCache {
  private map;
  constructor() {
    this.map = new Map();
  }
  
  set(key: number, value: number, duration: number): boolean {
    const hasKey = this.map.has(key);
    if (hasKey) {
      clearTimeout(this.map.get(key).timeoutId);
    }
    const timeoutId = setTimeout(() => this.map.delete(key), duration);  
    this.map.set(key, { value, timeoutId });
    return hasKey;
  }
  
  get(key: number): number {
    return this.map.has(key) ? this.map.get(key).value : -1;
  }
  
  count(): number {
    return this.map.size;
  }
}

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
