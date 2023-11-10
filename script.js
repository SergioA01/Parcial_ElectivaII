const data = {
    "tasks": {
      "one": {
        "task": "Learning Javascript",
        "state": true,
        "end": "2020/10/21"
      },
      "two": {
        "task": "Reader Book Clean Code",
        "state": false,
        "end": "2023/12/31"
      },
      "three": {
        "task": "Running",
        "state": false,
        "end": "2023/06/25"
      },
      "four": {
        "task": "Pass the Evaluation",
        "state": false,
        "end": "2023/11/09"
      },
      "five": {
        "task": "Go to Karaoke",
        "state": true,
        "end": "2022/08/25"
      },
      "six": {
        "task": "Finish watching the serie",
        "state": false,
        "end": "2023/12/31"
      },
      "seven": {
        "task": "Controll Weight",
        "state": false,
        "end": "2020/11/22"
      }
    }
  };
  
  const tasks = data.tasks;
  const today = new Date();
  
  for (const task in tasks) {
    const fila = document.createElement("tr");
    const celdaTarea = document.createElement("td");
    const celdaEstado = document.createElement("td");
    const celdaFecha = document.createElement("td");
    const celdaOpcion = document.createElement("td");
    const style = celdaEstado.style;
    const boton = document.createElement("button");

    celdaTarea.innerText = tasks[task].task;
    fila.appendChild(celdaTarea);
    
    let estado = "No vencida";
    if (today > new Date(tasks[task].end)) {
      estado = "Vencida";
    } else if (today === new Date(tasks[task].end)) {
      estado = "Cumplida";
      
    }
    celdaEstado.classList.add("editable");
    celdaEstado.innerText = estado;
    fila.appendChild(celdaEstado);

    if (estado === "Vencida"){
        style.background = "red";
        boton.disabled = true; 
    }

    if (estado === "No vencida"){
        style.background = "yellow";

    }

    if (estado === "Cumplida"){
        style.background = "green";
        boton.disabled = true; 
    }
  
    celdaFecha.innerText = tasks[task].end;
    fila.appendChild(celdaFecha);

    boton.innerText = "Modificar";
    boton.addEventListener("click", () => {
      console.log("Botón presionado", tasks[task].task);
    });
  
    celdaOpcion.appendChild(boton);
    fila.appendChild(celdaOpcion);
  
    document.querySelector("table tbody").appendChild(fila);
  }

  document.getElementById("Guardar").addEventListener("click", () => {
    console.log("Guardado");
});


 