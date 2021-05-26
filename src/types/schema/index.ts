export type PartNullable<T, K extends keyof T> = {
	[P in keyof T]: P extends K ? T[P] | null : T[P]
}

export type PartNonNullable<T, K extends keyof T> = {
	[P in keyof T]: P extends K ? NonNullable<T[P]> : T[P]
}

export type DeepNonNullable<T> = {
	[P in keyof T]: NonNullable<T[P]>
}

// export * from "./custom"
