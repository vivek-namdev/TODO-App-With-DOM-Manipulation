let todoes = JSON.parse(localStorage.getItem("message")) || [];

function allData() {
    localStorage.setItem("message", JSON.stringify(todoes));

    let element=""
    todoes.map(item=> (
        element+=`
        <tr>
                    <td>
                        <div class="checker">
                            <span><input type="checkbox" class="checkbox"></span>${item.message}
                        </div>

                        <div class="actionButtons">
                            <button class="editBtn">Edit</button>
                            <button class="deleteBtn">Delete</button>
                        </div>
                    </td>
                </tr>

        `
    ))

    const table = document.querySelector(".mytable")
    table.innerHTML=element
}

document.querySelector(".formSubmitter").addEventListener('submit', function handleSubmit(e) {
    e.preventDefault();

    const messageAdderInput = document.querySelector(".messageAdder").value;
    const newObj = {id:todoes.length+1, message: messageAdderInput, check: false}
    todoes.push(newObj)

    allData();
})