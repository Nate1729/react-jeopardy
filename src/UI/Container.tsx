import { ReactNode } from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode
  direction: 'row' | 'column';
}

export const Container = ({ children, direction }: ContainerProps) => {
  const styleName = direction === 'row' ? styles['row-container'] : styles['column-container'];
  return <div className={styleName}>{children}</div>
};
