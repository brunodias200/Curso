const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register(){
        this.valida()

        if(this.errors > 0){
            return
        }
    
        await this.userExists()

        if(this.errors > 0){
            return
        }

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)

        this.user = await LoginModel.create(this.body)
    }

    async login(){
        this.valida()

        if(this.errors > 0){
            return
        }
        this.user = await LoginModel.findOne({email: this.body.email})
        if(!this.user){
            this.errors.push('usuário ou senha invalidas')
            return
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('usuário ou senha invalidas')
            return
        }

        return        
    }

    async userExists(){
        this.user = await LoginModel.findOne({email: this.body.email})
        if (this.user){
            this.errors.push('email já em uso')
        }
    }

    valida(){
        this.clearUp()
        
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email invalido')
        }
        if(this.body.password.length <3 || this.body.password.length >=50){
            console.log()
            this.errors.push('Senha invalida')
        }
    }

    clearUp(){
        for(const chave in this.body){
            if(typeof this.body[chave] !== 'string'){
                this.body[chave] = ''
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
        }

    }

}

module.exports = Login;
