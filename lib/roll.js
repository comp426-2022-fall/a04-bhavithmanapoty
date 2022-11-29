export function roll(sides, dice, rolls)
{
    let result = [];
    
    for(let i = 0; i < rolls; i++)
    {
	result.push(Math.floor(Math.random() * ((dice * sides + 1) - 1) + 1));
    }
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": result};
}
