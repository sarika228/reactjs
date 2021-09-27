import React from 'react'

function BootstrapButton() {
    return (
        <div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )
}

export default BootstrapButton
