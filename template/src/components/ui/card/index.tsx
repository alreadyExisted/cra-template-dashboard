import Card, { CardProps } from '@material-ui/core/Card'
import cn from 'classnames'
import styles from './styles.module.css'

export function UiCard({ className, ...props }: CardProps) {
  return <Card className={cn(styles.card, className)} {...props} />
}
