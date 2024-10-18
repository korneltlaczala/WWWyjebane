"  -----------------
"  KORNEL WROTE THAT
"  -----------------
"
"  Initial setup
"  -----------------
set number relativenumber
set numberwidth=5
syntax on
set autoindent
set expandtab
set tabstop=4
set shiftwidth=4
set backspace=indent,eol,start
colo desert

"  Remapping <Esc>
"  -----------------
inoremap jk <Esc>
inoremap jK <Esc>
inoremap Jk <Esc>
inoremap JK <Esc>

"  Disabling arrow keys
"  -----------------
noremap <up> :echoerr "Umm, use k instead"<CR>
noremap <down> :echoerr "Umm, use j instead"<CR>
noremap <left> :echoerr "Umm, use h instead"<CR>
noremap <right> :echoerr "Umm, use l instead"<cr>
inoremap <up> <nop>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>

"  changing cursor
"  -----------------
if &term =~ '^xterm'
    " solid underscore
    let &t_SI .= "\<Esc>[4 q"
    " solid block
    let &t_EI .= "\<Esc>[2 q"
    " 1 or 0 -> blinking block
    " 3 -> blinking underscore
    " Recent versions of xterm (282 or above) also support
    " 5 -> blinking vertical bar
    " 6 -> solid vertical bar
endif

"  -----------------
"  -----------------
"  -----------------
