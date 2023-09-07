const ul = document.querySelector("ul");
      const liItems = document.querySelectorAll("li");
      const btnAdd = document.querySelector("button");
      const newTodoInput = document.getElementById("newTodo");

      btnAdd.addEventListener("click", () => {
        const taskText = newTodoInput.value.trim();
        if (taskText !== "") {
          const li = document.createElement("li");
          li.textContent = taskText;
          li.addEventListener("click", toggleTaskCompletion);
          ul.appendChild(li);
          newTodoInput.value = "";
          btnAdd.disabled = true;
        }
      });

      ul.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          toggleTaskCompletion(e.target);
        }
      });

      // Function to toggle task completion (strikethrough)
      function toggleTaskCompletion(taskItem) {
        taskItem.style.textDecoration = taskItem.style.textDecoration
          ? ""
          : "line-through";
      }

      // Function to handle input change and button state
      function handleInputChange() {
        const taskText = newTodoInput.value.trim();
        btnAdd.disabled = taskText === "";
      }

      // Add event listener for input changes
      newTodoInput.addEventListener("input", handleInputChange);

      // Initial button state setup
      btnAdd.disabled = true;