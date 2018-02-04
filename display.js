let add = "";
display = () => {
    fetch(`people.json`)
        .then((res) => res.json())
        .then(e => {
                console.log(e);
                e.sort(function (obj1, obj2) {
                    // Ascending: first age less than the previous
                    return obj1.name>obj2.name;
                });
                //console.log(e)
                e.forEach(function (element) {
                    add += `Name: ${element.name}<br>
           Birthday: ${element.bday}<br>`;
                }, this);
                document.getElementById("list").innerHTML = add;
            }
            //     (data) => {
            //     let disp = " ";
            //     console.log(data);
            //     data.forEach(function (ppl) {
            //         disp += `
            //     <li><ul><li>Name: ${ppl.name}</li>
            //     <li>Birthday: ${ppl.bday}</li>
            //     </ul>
            //     </li>
            //     <br>
            //     `;
            //     }, this);
            //     //console.log(disp);
            //     document.getElementById("list").innerHTML = disp;
            // }
        );
}
// document.getElementById("list").addEventListener('submit', addPost);

// function addPost(e) {
//     e.preventDefault();
//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;
//     fetch('people.json', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: title,
//                 body: body
//             })
//         })
//         .then((res) => res.json())
//         .then((data) => console.log(data))
// }