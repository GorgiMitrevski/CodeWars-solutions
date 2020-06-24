//Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//The function must accept a non-negative integer. If it is zero, it just returns "now". 
//Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

function formatDuration (seconds) {

      if(seconds==0){ return 'now' }
      const s = seconds % 60;
      const m = Math.floor(seconds / 60 ) % 60;
      const h = Math.floor(seconds/ ( 60 * 60 )) % 24;
      const d = Math.floor(seconds/ ( 60 * 60 * 24 )) % 365;
      const y = Math.floor(seconds/ ( 60 * 60 * 24 * 365 ));
      function durFormat(el,flag){
        let str=''
        let arr=['year', 'day', 'hour', 'minute', 'second']
        if(el){
          str = str + el + ' ' + arr[flag];
          str = str + ( el > 1 ? 's' : '' );
          if( flag === 4){ }
          else if( ( flag === 0 && (d || h || m || s) ) || 
                   ( flag === 1 && ( h || m || s)) || 
                   ( flag === 2 && ( m || s )) || 
                   ( flag === 3 && s)){
            str = str + ', ';
          }
        }
        return str;
      }
      let rezultat = ( durFormat ( y, 0 ) + durFormat( d, 1) + durFormat( h , 2) + durFormat( m, 3) + durFormat( s, 4) )
      if( rezultat.indexOf(',') > -1){ rezultat = rezultat.replace(/([^,]*),([^,]*)$/g, '$1 and$2'); }
      return rezultat;
}
