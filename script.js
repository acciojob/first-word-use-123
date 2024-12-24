function firstWord(s) {
  // your code he
	s = s.trim();

    // Find the index of the first space
    const firstSpaceIndex = s.indexOf(' ');

    // If no space is found, return the entire string; otherwise, return the substring up to the first space
    return firstSpaceIndex === -1 ? s : s.substring(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
