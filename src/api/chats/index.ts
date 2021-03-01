import {
  HTTPTransport,
  BaseAPI,
} from '../../modules/http/index.js';

// interface SignupData {
//   first_name: string;
//   second_name: string;
//   login: string;
//   email: string;
//   password: string;
//   phone: string;
// }
//
// interface SignInData {
//   login: string;
//   password: string;
// }

const host = 'https://ya-praktikum.tech';

const chatsAPIInstance = new HTTPTransport(`${host}/api/v2/chats`);

export default class ChatsAPI extends BaseAPI {
  getChats() {
    return chatsAPIInstance.get('/', {
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
    });
  }

  createChat(data: PlainObject) {
    return chatsAPIInstance.post('/', {
      data,
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
    });
  }

  addUsers(data: PlainObject) {
    return chatsAPIInstance.put('/users', {
      data,
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
    });
  }

  deleteUsers(data: PlainObject) {
    return chatsAPIInstance.delete('/users', {
      data,
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
    });
  }

  getChatUsers(chatId: number | string) {
    return chatsAPIInstance.get(`/${chatId}/users`, {
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
    });
  }
}
