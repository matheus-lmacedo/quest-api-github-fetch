import { baseUrl } from "../variables.js"
import { eventsQuantity } from "../variables.js";

async function getEvents(username) {
 const response = await fetch(`${baseUrl}/${username}/events?per_page=${eventsQuantity}`)
 return await response.json()
};

export { getEvents }