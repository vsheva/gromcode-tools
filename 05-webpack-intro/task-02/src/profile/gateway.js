// file path: src/profile/gateway.js


export async function fetchUser(userId) {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to get user data');
    }
    return await response.json();
}




// export async function fetchUser(userId) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${userId}`);
//         return await response.json();
//     } catch (error) {
//         throw new Error('Failed to get user data');
//     }
// }

