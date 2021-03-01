export const template = `
  <div class="chat-block">
    <div class="chat-block__info-row">
      <div class="avatar-with-name">
        <div
          class="chat-list-item__avatar"
          style="background-image: url({{ avatar }})"
        >
        </div>
        <h4 class="chat-list-item__name">{{ chatName }}</h4>
      </div>

      <div style="display: flex;">
        <div class="dropdown">
          {{{ chatMembersDropdownButton }}}

          <div class="dropdown-content" style="width: 320px;">
            <ul class="buttons-list">
              {{#each chatMembers}}
                <li style="padding: 5px 10px;">
                  <div class="avatar-with-name">
                    <div
                      class="chat-list-item__avatar"
                      style="background-image: url({{ this.avatar }})"
                    >
                    </div>
                    <h4 class="chat-list-item__name">{{ this.first_name }} {{ this.second_name }} ({{ this.login }})</h4>
                  </div>
                </li>
              {{/each}}
            </ul>
          </div>
        </div>

        <div class="dropdown">
          {{{ chatOptionsDropdownButton }}}

          <div class="dropdown-content">
            <ul class="buttons-list">
              <li>
                {{{ addUserButton }}}
              </li>
              <li>
                {{{ deleteUserButton }}}
              </li>
              <li>
                {{{ deleteChatButton }}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-block__create-message-row">
      <div class="dropdown">
        {{{ messageOptionsButton }}}

        <div class="dropdown-content-top">
          <ul class="buttons-list">
            <li>
              {{{ addMediaButton }}}
            </li>
            <li>
              {{{ addFileButton }}}
            </li>
            <li>
              {{{ addLocationButton }}}
            </li>
          </ul>
        </div>
      </div>
      {{{ newMessageForm }}}
    </div>

    <div id="add-user-modal" class="modal-wrapper">
    <form id="addUser" class="modal-body">
      <h4 class="modal-body__name">Добавить пользователя</h4>

      <div class="form-field">
        <div class="form-field__control">
          <input id="login-add" name="login" type="text" class="form-field__input" placeholder=" "  />
          <label for="login-add" class="form-field__label">Логин</label>
          <div class="form-field__bar"></div>
        </div>
      </div>

      <button type="submit" class="form__main-button">
        Добавить
      </button>
    </form>
  </div>

  <div id="remove-user-modal" class="modal-wrapper">
    <form id="removeUser" class="modal-body">
      <h4 class="modal-body__name">Удалить пользователя</h4>

      <div class="form-field">
        <div class="form-field__control">
          <input id="login-remove" name="login" type="text" class="form-field__input" placeholder=" " />
          <label for="login-remove" class="form-field__label">Логин</label>
          <div class="form-field__bar"></div>
        </div>
      </div>

      <button type="submit" class="form__main-button">
        Удалить
      </button>
    </form>
  </div>

  <div id="delete-chat-modal" class="modal-wrapper">
    <div class="modal-body">
      <h4 class="modal-body__name">Удалить этот чат?</h4>

      <button type="submit" class="form__main-button">
        Удалить
      </button>
    </div>
  </div>

  </div>
`;
