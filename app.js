const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Sta. Rosa Laguna",
    image: `https://randomuser.me/api/portraits/men/32.jpg`,
  },
  {
    name: "Jen Smith",
    age: 24,
    gender: "female",
    lookingfor: "male",
    location: "Sta. Rosa Laguna",
    image: `https://randomuser.me/api/portraits/women/24.jpg`,
  },
  {
    name: "Balanar Enes",
    age: 27,
    gender: "male",
    lookingfor: "female",
    location: "Sta. Rosa Laguna",
    image: `https://randomuser.me/api/portraits/men/27.jpg`,
  },
];

const profiles = profileIterator(data);

nextProfile();

//Next event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    let ui = `
    <ul class="list-group text-center">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender} looking for: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
  `;

    let img = `
    <img src="${currentProfile.image}" width="200">
  `;
    document.getElementById("profileDisplay").innerHTML = ui;
    document.getElementById("imageDisplay").innerHTML = img;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
