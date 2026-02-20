import Link from 'next/link'
 
export default function Links() {
  return <>
        <nav className="p-4  ">
            <ul>
                <li className='m-2'><Link href="/dashboard">DashBoard</Link></li>
                <li className='m-2'><a href="/configuracoes">Configurações</a></li>
            </ul>
          
        </nav>
  </>
}