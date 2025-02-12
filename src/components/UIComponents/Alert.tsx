type CompProps = {
    type?: 'error' | 'default' | 'success'

}
function Alert({ type = 'default' }: CompProps) {

    return (
        <div>Alert</div>
    )
}

export default Alert