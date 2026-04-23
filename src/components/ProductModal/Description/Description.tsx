import { type FC } from "react";
import styles from "./Description.module.scss";


interface IProps {
    storage: string
    sostav: string
}

export const Description: FC<IProps> = ({ storage, sostav }) => {
    if (!storage && !sostav) return null
    return (
        <div className={styles.container}>
            {!!storage && (
                <>
                    <h3 className={styles.heading}>
                        {'Условия хранения'}
                    </h3>
                    <p className={styles.text}>
                        {storage?.trim()}
                    </p>
                </>
            )}
            {!!sostav && (
                <>
                    <h3 className={styles.heading}>
                        {'Состав'}
                    </h3>
                    <p className={styles.text}>
                        {sostav?.trim()}
                    </p>
                </>
            )}
        </div>
    )
}