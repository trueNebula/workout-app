# Database Structure

### Collections:

- User
- Mesocycle
- Plan
- Workout
- WorkoutExercise
- Exercise

### Tables

```ts
User {
	_id: string,
	username: string,
	email: string,
	password: string,
	mesocycles: Array<string>,
	created_at: Date,
	updated_at?: Date,
}
```

```ts
Mesocycle {
	_id: string,
	name: string,
	description: string,
	plans: Array<string>,
	created_at: Date,
	updated_at?: Date,
}
```

```ts
Plan {
	_id: string,
	name: string,
	description: string,
	workouts: Array<string>,
	created_at: Date,
	updated_at?: Date,
}
```

```ts
Workout {
	_id: string,
	name: string,
	type: string,
	workout_exercises: Array<string>,
	created_at: Date,
	updated_at?: Date,
}

Type {
	Full Body,
	Upper Body,
	Lower Body,
	Push,
	Pull,
	Legs,
	Chest/Back,
	Shoulders/Arms,
}
```

```ts
WorkoutExercise {
	_id: string,
	exercise: string,
	history: Array<History>,
	superset: boolean,
	created_at: Date,
	updated_at?: Date,
}

History {
	_id: string,
	sets: Array<WOSet>,
	notes: string,
	created_at: Date,
}

WOSet {
	_id: string,
	reps: number,
	weight: number,
	rpe: number,
	dropsets: boolean,
	myomatch: boolean,
}
```

```ts
Exercise {
	_id: string,
	name: string,
	category: Category,
	target: MuscleGroup,
	muscles: Array<GenericMuscle>,
	bias?: GenericMuscle,
	description?: string,
	cues: Array<String>,
	link?: string,
	created_at: Date,
	updated_at?: Date,
}

Category {
	Main Compound,
	Secondary Compound,
	Isolation,
}

MuscleGroup {
	Neck,
	Chest,
	Core,
	Shoulders,
	Back,
	Legs,
	Biceps,
	Triceps
}

GenericMuscle {
	Neck, // add more
	Upper Pecs,
	Middle Pecs,
	Lower Pecs,
	Upper Abs,
	Lower Abs,
	Front Delts,
	Side Delts,
	Rear Delts,
	Upper Traps,
	Middle Traps,
	Lower Traps,
	Rhomboids,
	Lats,
	Iliac Lats,
	Quads,
	Rectus Femoris,
	Hamstrings,
	Glutes,
	Calves,
	Tibialis,
	Biceps Long Head,
	Biceps Short Head,
	Triceps Long Head,
	Triceps Medial Head,
	Triceps Lateral Head,
}
```
