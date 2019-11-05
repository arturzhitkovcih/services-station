/**
 * @typedef {Object} employee_model
 *
 * @property {Number} id - Order id
 * @property {String} firstName - Employee Name
 * @property {String/null} middleName - Employee middle name
 * @property {String} lastName -  Employee last name
 * @property {String} photo - Employee photo
 * @property {Number} unitId - Unit id
 */

export default (response: any) => {
    return response.map((item: any) => {
        return {
            id: item.id,
            firstName: item.firstname,
            middleName: item.middlename,
            lastName: item.lastname,
            photo: item.photo,
            unitId: item.unitid
        };
    });
};
