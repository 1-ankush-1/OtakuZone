const url = "https://ecomm-dfca0-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json"

const askQuestionAboutCollabration = async (questionDetail) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(questionDetail),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response.ok) {
            alert("done");
            return "done";
        }
    } catch (err) {
        console.log(err)
    }
}

const aboutServices = {
    askQuestions: askQuestionAboutCollabration
}

export default aboutServices 