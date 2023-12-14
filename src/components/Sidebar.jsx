import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
      />
    
      <div className={styles.profile}>
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>  
  )
}