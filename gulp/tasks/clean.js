import gulp from 'gulp';
import del from 'del';
import { clean as conf } from '../conf';

gulp.task('clean', cb => {
  del(conf.path).then(paths => {
    console.log('Delete:\n', paths.join('\n'));
    cb();
  });
});
