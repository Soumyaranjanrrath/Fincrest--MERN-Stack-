import React from 'react';

function CreateTicket() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Create a Ticket</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
