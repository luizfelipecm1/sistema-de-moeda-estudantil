// src/pages/Home.jsx
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Home = () => {
    return (
        <div
            className="p-d-flex p-flex-column p-jc-center p-ai-center"
            style={{
                minHeight: '100vh',
                padding: '3rem',
                backgroundColor: '#f4f7fc',
                textAlign: 'center',
            }}
        >
            {/* Cabeçalho */}
            <header>
                <h1 className="p-mb-2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    Bem-vindo ao Sistema CoinMaster
                </h1>
                <p
                    className="p-mb-4"
                    style={{
                        maxWidth: '650px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: '#555',
                    }}
                >
                </p>
            </header>

            {/* Seções de ação */}
            <div
                className="p-d-flex p-flex-wrap p-jc-center p-ai-center"
                style={{
                    gap: '2rem',
                    marginTop: '3rem',
                    maxWidth: '1200px',
                    width: '100%',
                    justifyContent: 'center',  // Centraliza os cards horizontalmente
                    alignItems: 'center',       // Alinha os cards verticalmente
                    flexWrap: 'wrap',           // Permite a quebra para o próximo "linha"
                }}
            >
                {/* Card para Alunos */}
                <Card
                    title="Sou Aluno"
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        margin: '1%'
                    }}
                    footer={
                        <Button
                            label="Cadastre-se"
                            icon="pi pi-user-plus"
                            className="p-button-primary"
                            onClick={() => (window.location.href = '/register')}
                        />
                    }
                >
                    <p style={{ fontSize: '1rem', color: '#444' }}>
                        Cadastre-se para começar a receber moedas de mérito e trocá-las por vantagens exclusivas.
                    </p>
                </Card>

                {/* Card para Professores */}
                <Card
                    title="Sou Professor"
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        margin: '1%'
                    }}
                    footer={
                        <Button
                            label="Acesse"
                            icon="pi pi-sign-in"
                            className="p-button-success"
                            onClick={() => (window.location.href = '/login')}
                        />
                    }
                >
                    <p style={{ fontSize: '1rem', color: '#444' }}>
                        Distribua moedas para premiar o desempenho dos alunos e acompanhe suas transações.
                    </p>
                </Card>

                {/* Card para Empresas Parceiras */}
                <Card
                    title="Sou Parceiro"
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        margin: '1%'
                    }}
                    footer={
                        <Button
                            label="Acesse"
                            icon="pi pi-sign-in"
                            className="p-button-warning"
                            onClick={() => (window.location.href = '/login')}
                        />
                    }
                >
                    <p style={{ fontSize: '1rem', color: '#444' }}>
                        Ofereça vantagens e descontos, e participe desse sistema de reconhecimento de mérito.
                    </p>
                </Card>
            </div>

            {/* Rodapé */}
            <footer
                className="p-text-center"
                style={{ marginTop: '4rem', color: '#888', fontSize: '0.9rem' }}
            >
                &copy; {new Date().getFullYear()} Sistema CoinMaster. Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default Home;
