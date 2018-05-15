document.addEventListener("DOMContentLoaded", function () {

    var title = document.createElement('h2');
    var titleText = document.createTextNode('DOM Drills: Please click button, hover over boxes, and single & double click boxes');
    title.appendChild(titleText);
    document.body.appendChild(title);

    var button = document.createElement('button');
    var buttonText = document.createTextNode('Add Square');
    button.appendChild(buttonText);
    document.body.appendChild(button);

    var i = 0
    button.addEventListener("click", function () {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = i;
        document.body.appendChild(div);
        i += 1;

        div.addEventListener("mouseenter", function () {
            var h1 = document.createElement('h1');
            var h1Text = document.createTextNode(div.id);
            h1Text.className = "h1Text";
            h1.appendChild(h1Text);
            div.appendChild(h1);

            div.addEventListener('mouseleave', function () {
                h1.remove();
            })
        })

        div.addEventListener("click", function () {
            var colors = ["pink", "purple", "teal", "grey", "greenyellow"];
            var randomColor = Math.floor(Math.random() * colors.length);
            div.style.backgroundColor = colors[randomColor];
        })

        div.addEventListener("dblclick", function () {
            if ((div.id) % 2 == 0) {
                if (nextDiv = document.getElementById(div.id).nextSibling) {
                    nextDiv.remove();
                } else {
                    alert("There is no following box to delete")
                }

            } else {
                if (prevDiv = document.getElementById((div.id) - 1)) {
                    prevDiv.remove();
                } else {
                    alert("There is no box before this one to delete")
                }
            }
        })
    })
})
