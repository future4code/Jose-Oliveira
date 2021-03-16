interface User {
	name: string
	balance: number
}

interface Result {
	brazilians: ResultItem;
	americans: ResultItem;
}

interface ResultItem {
	allowed: string[];
	unallowed: string[];
}

export enum LOCATION {
	EUA = "EUA",
	BRAZIL ="BRAZIL"
}

export enum NACIONALITY {
	BRAZILIAN = "BRAZILIAN",
	AMERICAN = "AMERICAN",
}

interface Casino {
	name: string;
	location: LOCATION;
}

interface UserCasino {
	name: string;
	age: number;
	nacionality: NACIONALITY;
  }


export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

export function verifyAge(casino: Casino, users: UserCasino[]): Result {
	const allowed: UserCasino[] = [];
	const unallowed: UserCasino[] = [];
  
	for (const user of users) {
	  if (casino.location === LOCATION.EUA) {
		if (user.age >= 21) {
		  allowed.push(user);
		} else {
		  unallowed.push(user);
		}
	  } else if (casino.location === LOCATION.BRAZIL) {
		if (user.age >= 18) {
		  allowed.push(user);
		} else {
		  unallowed.push(user);
		}
		break;
	  }
	}
  
	return {
	  brazilians: {
		allowed: allowed
		  .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
		  .map((u) => u.name),
		unallowed: unallowed
		  .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
		  .map((u) => u.name),
	  },
	  americans: {
		allowed: allowed
		  .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
		  .map((u) => u.name),
		unallowed: unallowed
		  .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
		  .map((u) => u.name),
	  },
	};
  }