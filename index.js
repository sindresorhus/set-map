export default function setMap(map, mapper) {
	return new Set([...map].map(value => mapper(value)));
}
