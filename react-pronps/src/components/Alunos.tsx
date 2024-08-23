import { AlunosProps } from "../types"
import styles from './Alunos.module.css'

export default function Alunos({ children }: AlunosProps){
    return(
        <div className={styles.div1}>
            {children}
        </div>
    )
}