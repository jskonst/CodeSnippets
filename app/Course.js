/**
 * 
 * @author jskonst
 */
function Course() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        model.save();
    }//GEN-LAST:event_buttonActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        model.qCourse.insert();
    }//GEN-LAST:event_button1ActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        model.qCourse.deleteRow();
    }//GEN-LAST:event_button2ActionPerformed
}
