// eslint-disable-next-line
export const Background = (ComponentStory: any, context: any,) => {
    const { scheme, accent }: { scheme: string, accent: string } = context.globals;
    const { email, name, slack } = context.parameters.author || {};

    const defaultClasses = ['sb-show-main', 'sb-main-centered', 'sb-main-fullscreen', 'sb-show-preparing-story'];

    Array.from(document.body.classList)
        .filter(c => !defaultClasses.includes(c))
        .forEach(c => document.body.classList.remove(c));

    document.body.classList.add(scheme);
    document.body.classList.add(accent);

    const contact = [
        name && <>{name}</>,
        email && <a href={`mailto: ${email}`} target='_blank' rel="noreferrer">{'Email'}</a>,
        slack && <a href={slack} target='_blank' rel="noreferrer">{'Slack'}</a>
    ].reduce((acc, curr) => {
        if (!acc && !curr) return acc;
        acc = <>{acc} {acc ? '|' : null} {curr}</>
        return acc;
    });

    return (
        <div style={{
            padding: '32px 100px 42px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #FF4785',
            borderRadius: '8px'
        }}>
            <span style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '9999px',
                color: 'white',
                backgroundColor: '#FF4785',
                display: 'flex',
                gap: '4px',
                whiteSpace: 'nowrap'
            }}>Created By: {contact || 'Not Found'}
            </span>
            <ComponentStory />
        </div>
    )
}
