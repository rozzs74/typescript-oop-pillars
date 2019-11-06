// Parameter as properties for all modifiers

// Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both. Using private for a parameter property declares and initializes a private member; likewise, the same is done for public, protected, and readonly.
class Food {
	constructor(public type: string, private color: string, readonly size: number, protected ingredients: string) {

	}
}