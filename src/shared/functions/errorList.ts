export const errorList = (errors: any) => {
    const keys = Object.keys(errors)

    if (keys.length === 0) {
        return "";
    }

    const errorsHTML = [];

    for (const key of keys) {
        if (errors[key].length > 0) {
            errorsHTML.push(`<li>${key}<ul class="errorlist">${generateErrorItem(errors[key]).join('').replace(
                /,/g, ''    
            )}</ul></li>`)
        }
    }

    return `<ul class="errorlist">${errorsHTML.join("")}</ul>`
}

export const generateErrorItem = (errors: string[]) => errors.map(err => `<li>${err}</li>`)