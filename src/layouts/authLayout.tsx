import { ReactNode } from "react";

function AuthLayout({ children, title }: { children: ReactNode, title: String }) {
  return (
    <main className='bg-primary'>
      <div className="container">
        <div className="row justify-content-center align-content-center" style={{ height: '100vh' }}>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className='text-center'>{title}</h3>
                <hr />
                <form>
                  {children}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;