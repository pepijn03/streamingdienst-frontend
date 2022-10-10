class LocalStorageManager {

    CodeKey = 'filmID';

    GetFilmId(){
        return localStorage.getItem(this.CodeKey);
    }

    GetAndClearFilmId(){
        let code = localStorage.getItem(this.CodeKey);
        localStorage.removeItem(this.CodeKey);
        return code;
    }

    SetFilmId(id){
        localStorage.setItem(this.CodeKey, id);
    }
}

export default new LocalStorageManager();