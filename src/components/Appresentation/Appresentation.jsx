import ApprStyle from './Appresentation.module.css'

export function Appresentation(){
    return (
        <div className={ApprStyle.content}>
            <h1 className={ApprStyle.title}>Missão de te ajudar no seu crescimento espiritual e pessoal.</h1>
            <h3 className={ApprStyle.subtitle}>Bíblias, devocionais e livros de grandes homens e mulheres de Deus</h3>
        </div>
    )
}